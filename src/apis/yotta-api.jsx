import axios from 'axios';
import CONSTS from '../constants';

async function gets(apiName){
    let result = undefined;
    try{
        result = await axios.get(CONSTS.BASE_URL + apiName);
    }catch (e) {
        console.log(e);
    }
    return result && result.data.data;
}

async function gets_8084(apiName){
    let result = undefined;
    try{
        result = await axios.get(CONSTS.BASE_URL_8084 + apiName);
    }catch (e) {
        console.log(e);
    }
    return result && result.data.data;
}

const YottaAPI = {
    // 获取
    getDomainsBySubject() {
        let result =  gets('domain/getDomainsGroupBySubject');
        return result;
    },
    // 统计知识主题
    async getCountTopic(){
        return await gets('statistics/countTopic');
    },
    // 统计知识碎片
    async getCountAssemble(){
        return await gets('statistics/countAssemble');
    },
    // 获取图
    async getSubjectGraph(subject){
        return await gets_8084(`subject/getSubjectGraphByName?subjectName=${encodeURI(subject)}`);
    }

};

export default YottaAPI;
