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

  selected_grades = getSelected('grades');
  cmd = 'select student_name from details where ' + get_command('grades', selected_grades);
  names = queryDBSet(cmd);

  items_displayed = [];
  for (let item of items) {
    txt = (item.getElementsByTagName('input')[0]).value;  
    if (names.indexOf(txt) != -1) {
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

function plotData(class_wcpm, student_wcpm, dates) {
  var trace1 = {x:dates, y:class_wcpm, type:'marker', name:'Class WCPM'}; // class WCPM
  var trace2 = {x:dates, y:student_wcpm, type:'marker', name:'Student WCPM'}; // student WCPM
  var layout = { xaxis:{title: "Date"}, yaxis: {title: "Student WCPM / Class WCPM"} };
  var config = {responsive:true}
  Plotly.newPlot("myPlot", [trace1,trace2], layout, {displaylogo:false}, config);
}

function populateDropdown(id) {
  div = document.getElementById(id);
  if (id == 'grades') {items = queryDBSet('select grade from details;')}
  else if (id == 'names') {items = queryDBSet('select student_name from details;')}
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
  //console.log(selected_grades, cmd, names);
  for (let x of document.getElementsByClassName('grades-ch')) {
    input = x.getElementsByTagName('input')[0];
    if (grades.indexOf(input.value) != -1 ) {
      x.style.display = 'block';
      input.checked = true;
    }
    else {
      x.style.display = 'none';
      input.checked = true;
    }
  }
}

function applyFilter(id) {
  dates = queryDBSet('select date from details;');
  selected = getSelected(id);
  avg_class_wcpm = get_wcpm(id, dates, selected, 'grade_wcpm');
  avg_student_wcpm = get_wcpm(id, dates, selected, 'student_wcpm');
  plotData(avg_class_wcpm, avg_student_wcpm, dates);
  
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
    items = queryDBSet('select student_name from details');

  }
  
  else if (id == 'grades') {
    items = queryDBSet('select grade from details');
    
  }

  updateDropdown(id, items);
  applyFilter(id);
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
  populateDropdown('names');
  
  //plotDataGoogle(avg_class_wcpm, avg_student_wcpm, dates);
})


/*
function plotDataGoogle(class_wcpm, student_wcpm, dates) {
  google.charts.load('current', { packages:['corechart'] });
  //google.charts.setOnLoadCallback(drawChart);

  data = [['Price', 'Size']]
  for (i=0; i<=class_wcpm.length; i++) {
    data.push([dates[i], class_wcpm[i]]);
  }
  // Set Data
  //data = google.visualization.arrayToDataTable([data]);
  var data = google.visualization.arrayToDataTable([
    ['Price', 'Size'],
    [50,7],[60,8],[70,8],[80,9],[90,9],
    [100,9],[110,10],[120,11],
    [130,14],[140,14],[150,15]
  ]);

  // Set Options
  var options = {
    title: 'House Prices vs. Size',
    hAxis: {title: 'Square Meters'},
    vAxis: {title: 'Price in Millions'},
    legend: 'none'
  };
  // Draw
  var chart = new google.visualization.LineChart(document.getElementById('myChart'));
  //chart.draw(data, options);
}
*/