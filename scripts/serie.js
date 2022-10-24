var Serie = /** @class */ (function () {
    //synapsis: string;
    //imagen: string;
    //streaming: string;
    //numcapitulos: number;
    //calificacion: number:
    function Serie(id, name, canal, seasons) {
        this.id = id;
        this.name = name;
        this.canal = canal;
        this.seasons = seasons;
        //this.synapsis = synapsis;
        //this.imagen = imagen;
        //this.streaming = streaming;
        //this.numcapitulos = numcapitulos;
        //this.calificacion = calificacion;
    }
    return Serie;
}());
export { Serie };
