
let apiUrl = "https://gorest.co.in/public/v1/users"
async function api(url)
{
	let details = await fetch(url);
	var data    = await details.json();
	 console.log(data);
	show(data);
	}
api(apiUrl)

function show(data) {
	let tab =`<tr>
	<th >S.NO</th>
	<th id=a>EmpId</th>
	<th>Name</th>
	<th>Gender</th>
	<th>EMail</th>
	<th>Status</th>
	<th>Update</th></tr>`;
for (let r of data.data){
	tab += `<tr>
	<td id = b></td>
	<td id=a>${r.id}</td>
	<td>${r.name}</td>
	<td>${r.gender}</td>
    <td>${r.email}</td>
	<td>${r.status}</td>
	<td> <a  href ="Update.html" onclick="editRow(this)" target="_blank" ><i class='far fa-edit'></i></a>
	 <a href ="#!" onclick = "DeleteRow(this)" ><i class='fas fa-trash' ></i></a> </td></tr>`;
	}	
	document.getElementById("Details").innerHTML = tab;
	
}
function Table(){
	let dropList, table, rows, cells,status, filter;
	    dropList = document.getElementById("mylist");
	    filter   = dropList.value;
	    table    = document.getElementById("Details");
	    rows     = table.getElementsByTagName("tr");
	for(let row of rows)
	{
		cells  = row.getElementsByTagName("td");
		status = cells[5] || null;
	if (filter === "All" || !status || (filter === status.textContent))
		{
		row.style.display = ""; 
		}
	else
	{
	    row.style.display ="none";
		
	}}}

function editRow(td)
	{
		var table = document.getElementById('Details');
		rows = table.getElementsByTagName("tr");
		
	for(var i = 1; i < table.rows.length; i++)
		{
			table.rows[i].onclick = function()
		{
				cells=document.getElementsByTagName("td");

				var id= this.cells[1].innerHTML;
				var	nam = this.cells[2].innerHTML;
				var	gender = this.cells[3].innerHTML;
				var	mail = this.cells[4].innerHTML;
		       var status=this.cells[5].innerHTML;

				localStorage.setItem("ID" , id);
				localStorage.setItem("NAME", nam);
				localStorage.setItem("GENDER", gender);
				localStorage.setItem("MAIL", mail);
				localStorage.setItem("STATUS",status);
	    }
	    }
	}	

function DeleteRow(td) 
{
    if(confirm("Are you sure to delete this record ?"))
	{
		row = td.parentElement.parentElement;
		document.getElementById("Details").deleteRow(row.rowIndex);
	}
	}
function searchUser()
{
var filter =document.getElementById("Sinput").value.toUpperCase(); 
var table = document.getElementById('Details');
var tr = table.getElementsByTagName("tr");
for(var i = 1; i<tr.length; i++)
{
	var td = tr[i].getElementsByTagName("td")[4]
	if(td){
		var txtvalue = td.textContent || td.innerHTML;
		if(txtvalue.toUpperCase().indexOf(filter) > -1){
			tr[i].style.display="";
		}
		else{
			tr[i].style.display = "none";
		}}
	}
}


	
	





				
			
  
  


	


         
