export class Serie {
    id: number;
    name: string;
    canal: string;
    seasons: number;
    //synapsis: string;
    //imagen: string;
    //streaming: string;

    //numcapitulos: number;
    //calificacion: number:
  
    constructor(id: number,name: string,  canal: string, seasons: number) {
      this.id =id;
      this.name = name;
      this.canal =canal;
      this.seasons =seasons;
      //this.synapsis = synapsis;
      //this.imagen = imagen;
      //this.streaming = streaming;
      //this.numcapitulos = numcapitulos;
      //this.calificacion = calificacion;
    }
  }