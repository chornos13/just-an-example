package id.chornos13.orelic.kuesionerfasilkom.dbonline.saran;

import java.util.Map;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.http.FieldMap;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Query;

/**
 * Created by OreliC on 6/15/2018.
 * Project InstagramX
 */
public interface ApiSaran {

    @POST(ParamSaran.URL.ADD)
    @FormUrlEncoded
    Call<ResponseBody> addSaran(@FieldMap() Map<String, String> param);

    @POST(ParamSaran.URL.UPDATE)
    @FormUrlEncoded
    Call<ResponseBody> updateSaran(@FieldMap() Map<String, String> param);

    @GET(ParamSaran.URL.GET_SARAN)
    Call<ResponseBody> getSaran(@Query("view") String view);
}
