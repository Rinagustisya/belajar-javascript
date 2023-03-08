// membuat object angkot
function Angkot(supir, trayek, penumpang, kas) {
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
}

var angkot1 = new Angkot ('Sekar', ['Semboro','Rejoagung'], [],0);

var angkot2 = new Angkot ('kayla', ['Semboro', 'cibubur'],[],0);