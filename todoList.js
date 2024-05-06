
var List = [];


function OnSubmit() {

    var fname = document.getElementById("fName").value;
    // document.getElementById("firstName").textContent=fname;
    var lname = document.getElementById("lName").value;
    // document.getElementById("lastName").textContent=lname;
    console.log(fname);
    console.log(lname);

    this.List.push({ 'FirstName': fname, 'LastName': lname });
    // document.getElementById("firstName").textContent=this.List[id].FirstName;
    // document.getElementById("lastName").textContent=this.List[id].LastName;
    console.log(this.List);
    // console.log(this.List[0].FirstName);

    toDisplay();
}

function toDisplay() {
    let content = "";
    List.forEach((user, i) => {
        content = content + `<tr>
        <td id="srNo">${i + 1}</td>
        <td id="firstName" >${user.FirstName}</td>
        <td id="lastName" >${user.LastName}</td>
        <td>
            <button onclick="onRemove(${i + 1})">Remove</button>
            <button onclick="onUpdate(${i + 1})">Update</button>
        </td>
    </tr>`;

    });
    document.getElementById("content").innerHTML = content;
}
function onRemove(del) {
    console.log(del);
    List.splice(del, 1);

    toDisplay();
}
function onUpdate() {

}