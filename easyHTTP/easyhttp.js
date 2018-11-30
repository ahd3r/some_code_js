function easyHTTP(){
    this.http = new XMLHttpRequest;
}

easyHTTP.prototype.get=function(url, callback){
    this.http.open('GET', url);
    this.http.onload=()=>{
        if(this.http.status===200){
            callback(null, JSON.parse(this.http.responseText));
        } else {
            callback(`Error: ${this.http.status}`);
        }
    };
    this.http.send();
};

easyHTTP.prototype.post=function(url, data, callback){
    this.http.open('POST',url);
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.onload=()=>{
        if(this.http.status===201){
            callback(null, this.http.responseText);
        }else if (this.http.status===404){
            callback(`Error: ${this.http.status}. Take of a num from the end of url if it there is, because you add it to end in any case`);
        } else {
            callback(`Error: ${this.http.status}`);
        }
    };
    this.http.send(JSON.stringify(data));
};

easyHTTP.prototype.put=function(url, data, callback){
    this.http.open('PUT', url);
    this.http.setRequestHeader('Content-type', 'application/json'); // This allow us to use a json data, without it you couldn't use json
    this.http.onload=()=>{
        if(this.http.status===200){
            callback(null, this.http.responseText);
        }else if(this.http.status===404){
            callback(`Error: ${this.http.status}. Try to add a num to end of url if it doesn't is their`);
        }else{
            callback(`Error: ${this.http.status}`);
        }
    };
    this.http.send(JSON.stringify(data));
};

easyHTTP.prototype.delete=function(url, callback){
    this.http.open('DELETE', url);
    this.http.onload=()=>{
        if(this.http.status===200){
            callback(null, 'Deleted');
        }else{
            callback(`Error: ${this.http.status}`);
        }
    };
    this.http.send();
};
