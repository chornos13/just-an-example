package id.chornos13.orelic.quranmobile.model;

import android.os.Parcel;
import android.os.Parcelable;

import id.chornos13.orelic.quranmobile.model.base.Base_IndexSurah;

/**
 * Created by OreliC on 4/2/2018.
 * Project QuranAndroid2
 */
public class Model_AudioManager extends Base_IndexSurah implements Parcelable {
    public String title, folder;
    public long totalSize;

    public Model_AudioManager(String title, String folder, int indexSurah, long totalSize)
    {
        this.title = title;
        this.folder = folder;
        this.indexSurah = indexSurah;
        this.totalSize = totalSize;
    }

    private Model_AudioManager(Parcel in) {
        title = in.readString();
        folder = in.readString();
        totalSize = in.readLong();
        indexSurah = in.readInt();
    }

    public static final Creator<Model_AudioManager> CREATOR = new Creator<Model_AudioManager>() {
        @Override
        public Model_AudioManager createFromParcel(Parcel in) {
            return new Model_AudioManager(in);
        }

        @Override
        public Model_AudioManager[] newArray(int size) {
            return new Model_AudioManager[size];
        }
    };

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel parcel, int i) {
        parcel.writeString(title);
        parcel.writeString(folder);
        parcel.writeLong(totalSize);
        parcel.writeInt(indexSurah);
    }
}
