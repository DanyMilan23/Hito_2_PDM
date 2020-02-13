package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;


public class campeonato  {
    String nombreCampeonato;
    Equipo [] equipos;

    public Jugador(){
        this.nombreCampeonato="";
        this.equipos={};
    }

    public int getNombreEquipo (){
        return nombreCampeonato;
    }

    public void setNombreCampeonato (String nombreCampeonato){
        this.nombreCampeonato = nombreCampeonato;
    }

    public int getEquipos (){
        return equipos;
    }

    public void setEquipos (Equipo equipos){
        this.equipos = equipos;
    }

    public void imprimir()
    {
        System.printLn("nombre campeonato" + this.nombreCampeonato);
        for(int i =0 ; i < equipos.length;i++)
        {
            equipos[i].imprimir();
        }
    }

}
