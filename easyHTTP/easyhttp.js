function easyHTTP(){
    const http = new XMLHttpRequest;
}

easyHTTP.prototype.get=function(url){
    this.http.open('GET', url, true);

    const self = this;
    this.http.onload=function(){
        if(self.http.status===200){
            console.log(self.http.resposeText);
        }
    };
    this.http.send();
};
