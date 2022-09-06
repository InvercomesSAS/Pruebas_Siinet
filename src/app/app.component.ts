import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
respuestacliente:any
respuestaCredito:any

constructor(private cliente:HttpClient){

}

  ngOnInit(): void {
    let datos={
      "token":"e10adc3949ba59abbe56e057f20f883e",
      "nit":"28544423"
    }

    this.ConsultarCliente(datos)
    this.ConsultarCredito(datos)
    
  }
  

  ConsultarCliente(DatosBody:any){
    this.cliente.post("http://186.115.218.51:8089/api_susolucion/ws_clientes_consulta.php",DatosBody).subscribe(
      res=>{
        console.log(res);
       this.respuestacliente = res 
      },
      err=>{
        console.log("el error es: "+err.message);
        this.respuestacliente = err
      }
    )

  }



  ConsultarCredito(DatosBody:any){
    this.cliente.post("http://186.115.218.51:8089/api_susolucion/ws_creditos_consulta.php",DatosBody).subscribe(
      res=>{
        console.log(res);
       this.respuestaCredito = res 
      },
      err=>{
        console.log("el error es: "+err.message);
        this.respuestaCredito = err
      }
    )

  }

}
