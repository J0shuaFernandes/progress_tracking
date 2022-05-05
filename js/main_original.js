function myFunction(name) {
  // show dropdown elements
  document.getElementById(name).classList.toggle("show");
}

function filterFunction(div_name, input) {
  // function that filters out dropdown elements
  var input, filter, li, a, i;
  input = document.getElementById(input);
  filter = input.value.toUpperCase();
  div = document.getElementById(div_name);
  li = div.getElementsByTagName("li");
  console.log(li);
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function queryDB(query) {
  // query sql db and return array instead of an object
  let set, res = [];
  query = alasql(query);
  for (let q in query) {
    res.push(Object.values(query[q])[0]);
  }
  return res;
}

function queryDBSet(query) {
  res = queryDB(query);
  set = new Set(res), res = [];
  for (let s of set) { res.push(s); }
  return res;  
}

function get_wcpm(source, dates, items, type) { // type=student/class wcpm
  // get student/grade WCPM based on student_names/grade
  let items_new = [], cmd_last;
  if (source == 'grades' && items.length==1) {
    cmd_last = 'grade = "?"'.replace('?', items[0])
  }

  else if (source == 'names' && (items.length==1)) {
    cmd_last = 'student_name = "?"'.replace('?', items[0]);
  }

  else if (source == 'grades' && (items.length > 1)) {
    for (let item of items) { items_new.push('"' + item + '"'); }  
    cmd_last = '(grade = ' + items_new.join(' or grade = ') + ')';
  }

  else if (source == 'names' && (items.length > 1)) {
    for (let item of items) { items_new.push('"' + item + '"'); }  
    cmd_last = '(student_name = ' + items_new.join(' or student_name = ') + ')';
  } 
 
  let avg, avg_wcpm = [];
  for (let date of dates) {
    cmd_first = ('select % from details where date = "?" and '.replace('?',date)).replace('%', type);
    cmd = cmd_first + cmd_last;
    wcpm = queryDB(cmd); 
    avg = wcpm.reduce((acc,v,i,a)=>(acc+v/a.length),0);
    avg = avg.toFixed(2);
    avg_wcpm.push(avg);
  }
  return avg_wcpm;
}

function plotData(class_wcpm, student_wcpm, dates) {
  var trace1 = {x:dates, y:class_wcpm, type:'marker', name:'Class WCPM'}; // class WCPM
  var trace2 = {x:dates, y:student_wcpm, type:'marker', name:'Student WCPM'}; // student WCPM
  var layout = { xaxis:{title: "Date"}, yaxis: {title: "Student WCPM / Class WCPM"} };
  Plotly.newPlot("myPlot", [trace1,trace2], layout);
}

function populateDropdown(dropdown_id) {
  div = document.getElementById(dropdown_id);
  if (dropdown_id == 'grades') {items = queryDBSet('select grade from details;')}
  else if (dropdown_id == 'names') {items = queryDBSet('select student_name from details;')}
  for (let x of items) {
    li = document.createElement("li");
    input = document.createElement("input");
    input.type = 'checkbox', input.value = x;
    input.checked = true;
    input.setAttribute('onClick', 'applyFilter("?")'.replace('?',dropdown_id))
    if (dropdown_id == 'names') {input.className = 'names-ch';}
    else if (dropdown_id == 'grades') {input.className = 'grades-ch';}
    text = document.createTextNode(x);

    button = document.createElement('button');
    button.textContent = 'ONLY';
    button.setAttribute( "onClick", ('single_check("?", "%")'.replace('?',dropdown_id)).replace('%', x) );

    li.appendChild(input);
    li.appendChild(text);
    li.appendChild(button);
    div.appendChild(li);
  }
}

function updateDropdown(id, selected) {
    class_name = id+'-ch';
    items = document.getElementsByClassName(class_name);  
    for (let item of items) { 
      if (selected.indexOf(item.value) != -1) { 
        item.checked = true; 
      } 
      else { item.checked = false;}
    }
}

function getSelected(id) {
  class_name = id+'-ch';
  let items = [];
  selected = document.getElementsByClassName(class_name);
  for (let sel of selected) { if (sel.checked) { items.push(sel.value); } }
  return items;
}

function applyFilter(id) {
  dates = queryDBSet('select date from details;');
  selected = getSelected(id);
  avg_class_wcpm = get_wcpm(id, dates, selected, 'grade_wcpm');
  avg_student_wcpm = get_wcpm(id, dates, selected, 'student_wcpm');
  plotData(avg_class_wcpm, avg_student_wcpm, dates);
}

function single_check(id, value) {
  updateDropdown(id, value);
  applyFilter(id);
}

function check_all(id){
  if (id == 'names') { items = queryDBSet('select student_name from details'); }
  else if (id == 'grades') {items = queryDBSet('select grade from details');}
  updateDropdown(id, items);
  applyFilter(id);
}

fetch('https://ira8oas9wj.execute-api.ap-south-1.amazonaws.com/alpha/report')
.then(function(res){
  return res.json();
})
.then(function(data){
  // create sql table from JSON
  let grades, dates;
  let details = [];
  alasql('create table details(grade, date, grade_wcpm, student_name, student_wcpm)');
  grades = Object.keys(data.wcpm_details.grades);
  for (let grade of grades) {
    dates = Object.keys(data.wcpm_details.grades[grade].date);
    for (let date of dates) {
      grade_wcpm = data.wcpm_details.grades[grade].date[date].grade_wcpm;
      students = Object.values(data.wcpm_details.grades[grade].date[date].students_details);
      for (let student of students) {
        student_name = student.name, student_wcpm = student.wcpm;
        alasql('insert into details values (?,?,?,?,?)', [grade, date, grade_wcpm,
          student.name, student.wcpm]);
      }
    }
  }

  grades = queryDBSet('select grade from details;');
  dates = queryDBSet('select date from details;');
  names = queryDBSet('select student_name from details;');
  avg_class_wcpm = get_wcpm('names', dates, names, 'grade_wcpm');
  avg_student_wcpm = get_wcpm('names', dates, names, 'student_wcpm');
  plotData(avg_class_wcpm, avg_student_wcpm, dates);

  populateDropdown('grades');
  populateDropdown('names')
})