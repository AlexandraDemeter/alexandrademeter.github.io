package com.example.proiectexamen;

import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Rect;

import static com.example.proiectexamen.GameView.screenRatioX;
import static com.example.proiectexamen.GameView.screenRatioY;

public class Alien
{
    public int speed = 20;
    public boolean wasShot = true;
    int x = 0, y, width, height, Counter = 1;
    Bitmap alien1, alien2;

    Alien(Resources res)
    {
        alien1 = BitmapFactory.decodeResource(res, R.drawable.alienship);
        alien2 = BitmapFactory.decodeResource(res, R.drawable.alienship);

        width = alien1.getWidth();
        height = alien1.getHeight();

        width /= 13;
        height /= 13;

        width = (int) (width * screenRatioX);
        height = (int) (height * screenRatioY);

        alien1 = Bitmap.createScaledBitmap(alien1, width, height, false);
        alien2 = Bitmap.createScaledBitmap(alien2, width, height, false);

        y = -height;
    }

    Bitmap getAlien()
    {
        if(Counter == 1)
        {
            Counter++;
            return alien1;
        }
        Counter = 1;
        return alien2;
    }

    Rect getCollisionShape()
    {
        return new Rect(x, y, x + width, y + height);
    }
}
