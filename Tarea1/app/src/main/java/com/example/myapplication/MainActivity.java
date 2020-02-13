package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

public class MainActivity {

   public void Main(){
        Jugador jugador1 = new Jugador("Pepito1","HuiyTer1","4553422 cbba",20);
        Jugador jugador2 = new Jugador("Pepito2","HuiyTer2","4553422 cbba",24);
        Jugador jugador3 = new Jugador("Pepito3","HuiyTer3","4553422 cbba",25);
        Jugador jugador4 = new Jugador("Pepito4","HuiyTer4","4553422 cbba",18);
        Jugador jugador5 = new Jugador("Pepito5","HuiyTer5","4553422 cbba",22);

        Jugador[] jugadores =new Jugador[5];
        jugadores[0]=jugador1;
       jugadores[1]=jugador2;
       jugadores[2]=jugador3;
       jugadores[3]=jugador4;
       jugadores[4]=jugador5;

       Equipo equipo = new Equipo("Not found",jugadores);
       Equipo[] equipos= new Equipo[1];
       equipos[0]=equipo;

       Campeonato campeonato=new Campeonato("Campeonato Unifranz",equipos);
       campeonato.imprimir();

   }
}
