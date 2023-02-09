import jwt_decode from "jwt-decode"
import { notification } from "antd"



const Token = {

    /**
     * @description 토큰까기
     * @param  {string}  token 
     */
    decode: (token) => {
        const decodedToken = jwt_decode(token);
        return decodedToken;
    },

    /**
     * @description 토큰 유효시간 확인
     * @param {string} decodedToken
     */
    IsExpiredIn: (decodedToken) => {
        const expireDate = decodedToken['exp'] * 1000;
        const date = Date.now();
        return expireDate > date ? true : false;
    },

    /**
      * @description 유효시간 확인 -> 유효 : true / 유효x : false
      */
    exist: () => {
        return new Promise((resolve, reject) => {
            let ACCESS_TOKEN = localStorage.getItem('young-dong');
            if (ACCESS_TOKEN) {
                //토큰뜯기 -> 유효기간확인 -> 유효하면 true 안하면 false

                //base64 디코딩
                const decodedToken = Token.decode(ACCESS_TOKEN);
                const tokenExpired = Token.IsExpiredIn(decodedToken);
                if (tokenExpired) {
                    resolve(ACCESS_TOKEN);
                } else {
                    localStorage.removeItem('com.naver.nid.access_token');
                    localStorage.removeItem('com.naver.nid.oauth.state_token');
                    localStorage.removeItem('young-dong');
                    console.log("토큰시간이 만료되었습니다")
                    notification['error']({
                        message: `로그인에 실패하였습니다.`,
                        description: '다시 시도해주세요',
                        duration: 2
                    })

                    reject(new Error('Token is expired'));
                }
            } else reject(new Error('Token is non exists'));
        });
    }


}


export default Token