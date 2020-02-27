package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;

public class Jugador {
     int edad;
    String nombreCompleto,apellidos,ci;
    public Jugador(){
        this.edad="";
        this.nombreCompleto="";
        this.apellidos="";
        this.ci="";
    }

    public int getEdad (){
        return edad;
    }

    public void setEdad (int edad){
        this.edad = edad;
    }
    public int getNombreCompleto (){
        return nombreCompleto;
    }

    public void setNombreCompleto (String nombreCompleto){
        this.nombreCompleto = nombreCompleto;
    }
    public int getapellidos (){
        return apellidos;
    }

    public void setApellidos (String apellidos){
        this.apellidos = apellidos;
    }
    public int getCi (){
        return ci;
    }

    public void setCi (int ci){
        this.ci = ci;
    }

    public void imprimir()
    {
        System.printLn("nombre" + this.nombre);
        System.printLn("apellido" + this.apellidos);
        System.printLn("ci" + this.ci);
        System.printLn("edad" + this.edad);
    }

}
