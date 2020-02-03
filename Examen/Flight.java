package com.example.proiectexamen;

import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Rect;

import static com.example.proiectexamen.GameView.screenRatioX;
import static com.example.proiectexamen.GameView.screenRatioY;

public class Flight
{
    int toShoot = 0;
    boolean isGoingUp = false;
    int x,y, width, height, Counter = 0, ShootCounter = 1;
    Bitmap flight1,flight2, shoot1, shoot2, dead;
    private GameView gameView;

    Flight(GameView gameView, int screenY, Resources res)
    {
        this.gameView = gameView;

        flight1 = BitmapFactory.decodeResource(res, R.drawable.spaceship);
        flight2= BitmapFactory.decodeResource(res, R.drawable.spaceship);

        width = flight1.getWidth();
        height = flight1.getHeight();

        width /= 5;
        height /= 5;

        width = (int) (width * screenRatioX);
        height = (int) (height * screenRatioY);

        flight1 = Bitmap.createScaledBitmap(flight1,width, height,false);
        flight2 = Bitmap.createScaledBitmap(flight2,width, height,false);

        shoot1 = BitmapFactory.decodeResource(res, R.drawable.spaceship);
        shoot2 = BitmapFactory.decodeResource(res, R.drawable.spaceship);

        shoot1 = Bitmap.createScaledBitmap(shoot1, width, height, false);
        shoot2 = Bitmap.createScaledBitmap(shoot2, width, height, false);

        dead = BitmapFactory.decodeResource(res, R.drawable.dead);
        dead = Bitmap.createScaledBitmap(dead, width, height, false);

        y = screenY / 2;
        x = (int) (64 * screenRatioX);
    }

    Bitmap getFlight()
    {
        if(toShoot != 0)
        {
            if(ShootCounter == 1)
            {
                ShootCounter++;
                return shoot1;
            }
            ShootCounter = 1;
            toShoot --;
            gameView.newBullet();
            return shoot2;
        }
        if(Counter == 0)
        {
            Counter ++;
            return flight1;
        }
        Counter --;
        return flight2;
    }

    Rect getCollisionShape()
    {
        return new Rect(x, y, x + width, y + height);
    }

    Bitmap getDead()
    {
        return dead;
    }
}
