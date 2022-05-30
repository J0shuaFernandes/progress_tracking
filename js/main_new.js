 document.addEventListener('DOMContentLoaded', function() {   
    var drop = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(drop,{closeOnClick:false,coverTrigger:false,
      constrainWidth:false});
});

function myFunction(name) {
  // show dropdown elements / hide other elements
  document.getElementById(name).classList.toggle("show");
}

function filterFunction(id) {
  // function that filters out dropdown elements
  var input, filter;
  input = document.getElementById(id+'-input');
  filter = input.value.toUpperCase();
  items = document.getElementsByClassName(id+"-ch");

  if (id == 'names') {
    selected_grades = getSelected('grades');
    cmd = 'select student_name from details where ' + get_command('grades', selected_grades);
    selected = queryDBSet(cmd);
  }

  else if (id == 'grades') {
    selected_names = getSelected('names');
    cmd = 'select grade from details where ' + get_command('names', selected_names);
    selected = queryDBSet(cmd);    
  }

  items_displayed = [];
  for (let item of items) {
    txt = (item.getElementsByTagName('input')[0]).value;  
    if (selected.indexOf(txt) != -1) {
      items_displayed.push(item);//console.log(item);
    }
  }

  //console.log(items);
  for (let item of items_displayed) {
    txtValue = item.getElementsByTagName('label')[0].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
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

function get_command(source, items) {
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
  return cmd_last;
}

function get_wcpm(source, dates, items, type) { // type=student/class wcpm
  // get student/grade WCPM based on student_names/grade 
  let avg, avg_wcpm = [];
  for (let date of dates) {
    cmd_first = ('select % from details where date = "?" and '.replace('?',date)).replace('%', type);
    cmd = cmd_first + get_command(source, items);
    wcpm = queryDB(cmd); 
    avg = wcpm.reduce((acc,v,i,a)=>(acc+v/a.length),0);
    avg = avg.toFixed(2);
    avg_wcpm.push(avg);
  }
  return avg_wcpm;
}

function plotData(grade_wcpm, student_wcpm, dates) {
  var trace1 = {x:dates, y:grade_wcpm, type:'marker', name:'Class WCPM'}; // class WCPM
  var trace2 = {x:dates, y:student_wcpm, type:'marker', name:'Student WCPM'}; // student WCPM
  var layout = { xaxis:{title: "Date"}, yaxis: {title: "Student WCPM / Class WCPM"} };
  var config = {responsive:true}
  Plotly.newPlot("myPlot", [trace1,trace2], layout, {displaylogo:false}, config);
}

function populateDropdown(id) {
  div = document.getElementById(id);
  if (id == 'schools') {items = queryDBSet('select school from details;')}
  else if (id == 'names') {items = queryDBSet('select student_name from details;')}
  else if (id == 'grades') {items = queryDBSet('select grade from details;')}
  for (let x of items) {
    li = document.createElement("li");
    li.className = id+'-ch';
    li.style.display = 'block';

    input = document.createElement("input");
    input.type = 'checkbox', input.value = x;
    input.checked = true, input.id = x;
    input.setAttribute('onClick', 'applyFilter("x")'.replace('x',id))
    
    label = document.createElement('label');
    label.innerHTML = x;
    label.setAttribute('style', 'color:black;font-size:1rem;');
    label.setAttribute('onClick', "(document.getElementById('x')).click()".replace('x',x))

    space = document.createElement('label');
    space.innerHTML = '&nbsp';

    button = document.createElement('button');
    button.className = 'btn-small'
    button.textContent = 'ONLY';
    button.setAttribute( "onClick", ('single_check("?", "%")'.replace('?',id)).replace('%', x) );

    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(space);
    li.appendChild(button);
    div.appendChild(li);
  }
}

function updateDropdown(id, selected) {
    // checks/unchecks items
    items = document.getElementsByClassName(id+'-ch');  
    for (let item of items) { 
      input = item.getElementsByTagName('input')[0]
      if (selected.indexOf(input.value) != -1) { 
        input.checked = true; 
      } 
      else { input.checked = false;}
    }
}

function getSelected(id) {
  let items = [];
  selected = document.getElementsByClassName(id+'-ch');
  for (let sel of selected) { 
    input = sel.getElementsByTagName('input')[0]
    if (input.checked) { items.push(input.value); } 
  }
  return items;
}

function displayNames() {
  // get selected grades and display names
  selected_grades = getSelected('grades');
  cmd = 'select student_name from details where ' + get_command('grades', selected_grades);
  names = queryDBSet(cmd);
  //console.log(selected_grades, cmd, names);
  for (let x of document.getElementsByClassName('names-ch')) {
    input = x.getElementsByTagName('input')[0];
    if (names.indexOf(input.value) != -1 ) {
      x.style.display = 'block';
      input.checked = true;
    }
    else {
      x.style.display = 'none';
    }
  }
}

function displyGrades() {
  // get visible and selected names and display grades
  visible_names = []
  selected_names = getSelected('names');
  for (let x of document.getElementsByClassName('names-ch')) {
    input = x.getElementsByTagName('input')[0];
    if ( (selected_names.indexOf(input.value) != -1)  ) {
      visible_names.push(input.value);
    }
  }
  
  cmd = 'select grade from details where ' + get_command('names', visible_names);
  grades = queryDBSet(cmd);
  for (let x of document.getElementsByClassName('grades-ch')) {
    input = x.getElementsByTagName('input')[0];
    if (grades.indexOf(input.value) != -1 ) {
      x.style.display = 'block';
      input.checked = true;
    }
    else {
      x.style.display = 'none';
      input.checked = false;
    }
  }
}

function applyFilter(id) {
  dates = queryDBSet('select date from details;');
  selected = getSelected(id);
  avg_grade_wcpm = get_wcpm(id, dates, selected, 'grade_wcpm');
  avg_student_wcpm = get_wcpm(id, dates, selected, 'student_wcpm');
  plotData(avg_grade_wcpm, avg_student_wcpm, dates);
  
  if (id == 'grades') {
    displayNames();
  }

  else if (id == 'names') {
    displyGrades();
  }
}

function single_check(id, value) {
  updateDropdown(id, value); 
  applyFilter(id);
}

function labelClick(id, value) {
  (document.getElementById(value)).click();
}

function check_all(id){
  if (id == 'names') {
    selected_grades = getSelected('grades');
    //console.log(selected_grades);
    cmd = 'select student_name from details where ' + get_command('grades', selected_grades);
    selected = queryDBSet(cmd);
    //console.log(selected);
  }
  
  else if (id == 'grades') {
    selected_names = getSelected('names');
    //console.log(selected_names);
    cmd = 'select grade from details where ' + get_command('names', selected_names);
    selected = queryDBSet(cmd);
    //console.log(selected);
  }

  updateDropdown(id, selected);
  applyFilter(id);
  
  // if user hits select all display all grades
  if (id == 'names') {
    grades = document.getElementsByClassName("grades-ch");
    for (let x of grades) {
      x.style.display = "block";
    }
  }
}

function resetAll() {
  dropdowns = ['grades-ch','names-ch'];
  for (let dd of dropdowns) {
    items = document.getElementsByClassName(dd);
    for (let item of items) {
      item.style.display = "block";
      input = item.getElementsByTagName('input')[0];
      input.checked = true;
    }
  }
  applyFilter('grades');
}


fetch('https://vcou22guei.execute-api.ap-south-1.amazonaws.com/alpha/report')
.then(function(res){
  return res.json();
})
.then(function(data){
  //alasql('create table details(school, grade, date, grade_wcpm, student_name, student_wcpm)');
  console.log(data);
  let records = [];
  alasql('create table details(school, grade, date, grade_wcpm, student_name, student_wcpm)');
  schools = Object.values(data.SchoolScores);
  for (let school of schools) {
    school_name = school.school_name;
    //console.log(school_name);
    grade_list = school.gradeList;
    //console.log(grade_list);
    for (let gl of grade_list) {
      grade = gl.grade;
      //console.log(grade);
      days = Object.values(gl.data);
      //console.log(days);
      for (let day of days){
        date = day.date;
        grade_wcpm = day.avgwcpm;
        students = Object.values(day.studentList);
        for (let student of students) {
          alasql('insert into details values (?,?,?,?,?,?)', [school_name, grade, date,
            grade_wcpm, student.name, student.score]);
        }
      }
    }
  }

  populateDropdown('schools');  
  populateDropdown('grades');  
  populateDropdown('names');  

  //avg_school_wcpm = get_wcpm('schools', dates, names, 'school_wcpm')
  //avg_grade_wcpm = get_wcpm('names', dates, names, 'grade_wcpm');
  //avg_student_wcpm = get_wcpm('names', dates, names, 'student_wcpm');
  //plotData(avg_grade_wcpm, avg_student_wcpm)

  console.log(queryDBSet('select date from details;').sort());
  console.log(records.length); 


  /*
  avg_grade_wcpm = get_wcpm('names', dates, names, 'grade_wcpm');
  avg_student_wcpm = get_wcpm('names', dates, names, 'student_wcpm');
  plotData(avg_grade_wcpm, avg_student_wcpm, dates);*/
})