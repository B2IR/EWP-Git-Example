$("#clone").tooltipster({
	"content": $("#clonebsp").detach()
});

$("#add").tooltipster({
	"content": $("#addbsp").detach()
});

$("#commit").tooltipster({
	"content": $("#commitbsp").detach()
});

$("#push").tooltipster({
	"content": $("#pushbsp").detach()
});

$("#pull").tooltipster({
	"content": $("#pullbsp").detach()
});


$("#befehle").DataTable({
	"ajax" : "githa.json",
	"columns": [
		{data:"befehl"},
		{data:"beispiel"},
		{data:"beschreibung"}
	]
})