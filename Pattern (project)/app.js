const homePage=function(){
  while(document.querySelector('.col').firstChild){
    document.querySelector('.col').firstChild.remove();
  }
  const stuff = document.createElement('h1');
  stuff.className='text-center';
  stuff.textContent='This is HOME!';
  document.querySelector('.col').appendChild(stuff);
};
const aboutPage=function(){
  while(document.querySelector('.col').firstChild){
    document.querySelector('.col').firstChild.remove();
  }
  const stuff = document.createElement('h1');
  stuff.className='text-center';
  stuff.textContent='About our site';
  document.querySelector('.col').appendChild(stuff);
};
const contactPage=function(){
  document.querySelector('.col').innerHTML=`<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>`;
};

const Page = function(){
  this.currentPage=null;
}
Page.prototype={
  change:function(newPage){
    this.currentPage=newPage;
  },
};

const some = new Page();

document.querySelector('#home').addEventListener('click', function(){
  some.change(homePage());
});

document.querySelector('#about').addEventListener('click', function(){
  some.change(aboutPage());
});

document.querySelector('#contact').addEventListener('click', function(){
  some.change(contactPage());
});
