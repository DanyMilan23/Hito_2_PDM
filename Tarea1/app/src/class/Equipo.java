package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;

public class Equipo {
    String nombreEquipo,categoria;
    Jugador [] jugadores;

    public Jugador(){
        this.nombreEquipo="";
        this.categoria="";
        this.jugadores={};
    }

    public int getNombreEquipo (){
        return nombreEquipo;
    }

    public void setNombreEquipo (String nombreEquipo){
        this.nombreEquipo = nombreEquipo;
    }
    public int getCategoria (){
        return categoria;
    }

    public void setCategoria (String categoria){
        this.categoria = categoria;
    }
    public int getJugadores(){
        return jugadores;
    }

    public void setJugadores (Jugador jugadores){
        this.jugadores = jugadores;
    }

    public void imprimir()
    {
        System.printLn("nombre equipo" + this.nombreEquipo);
        System.printLn("categoria" + this.categoria);
        for(int i =0 ; i < jugadores.length;i++)
        {
            jugadore[i].imprimir;
        }
    }



}
