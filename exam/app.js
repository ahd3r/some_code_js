/*
 * Each Color Rect is a link <a>.
 * You need to make these links clickable, 
 * each link should color its own container (parent element with class name ‘.container’) 
 * into the color from data-color attribute.
 * 
 * Link ".animate-all" should animate color switching of each container, from left to right  
 * with time interval of 2 seconds.
*/

const forStorage=(()=>{
  return {
    beginUseStorage:function(){
      localStorage.setItem('actions', JSON.stringify([]));
    },
    writeNewData:function(newData){
      const currentDataInStorage = localStorage.getItem('actions');
      if(currentDataInStorage){
        const currentData=JSON.parse(currentDataInStorage);
        currentData.push(newData);
        localStorage.setItem('actions',JSON.stringify(currentData));
      }else{
        localStorage.setItem('actions',JSON.stringify([newData]));
      }
    },
    getData:function(){
      const dataInStorage = localStorage.getItem('actions');
      if(dataInStorage){
        return JSON.parse(dataInStorage);
      } else {
        forStorage.beginUseStorage();
        return forStorage.getData();
      }
    }
  }
})();

const UI = (()=>{
  return {
    createStopBtn:function(classForWhom,classOfBtnForStop){
      const space = document.createElement('span');
      space.textContent=' | ';
      const btn = document.createElement('a');
      btn.className = classOfBtnForStop;
      btn.setAttribute('href','#!');
      btn.textContent='Stop';
      document.querySelector('body').insertBefore(btn,document.querySelector(`.${classForWhom}`).nextElementSibling);
      document.querySelector('body').insertBefore(space,document.querySelector(`.${classOfBtnForStop}`));
      document.querySelector(`.${classOfBtnForStop}`).addEventListener('click',()=>{
        Intervals.clearIntervalAndBtn();
      });
    },
    createClearBtn:()=>{
      if(!document.querySelector('.clearBtn')){
        const clearBtn=document.createElement('a');
        clearBtn.className='clearBtn';
        clearBtn.textContent='Clear';
        clearBtn.setAttribute('href','#!');
        document.querySelector('body').insertBefore(clearBtn,document.querySelector('script'));
        document.querySelector('.clearBtn').addEventListener('click',UI.clearAllContainersOfColor);
      }
    },
    clearAllContainersOfColor:()=>{
      const containers = document.querySelectorAll('.container');
      containers.forEach((container)=>{
        container.className='container';
      });
      document.querySelector('.clearBtn').remove();
      // in case if user click on clear while animations 
      setTimeout(()=>{
        containers.forEach((conteiner)=>{
          if(conteiner.className!=='container'){
            if(!document.querySelector('.clearBtn')){
              const clearBtn=document.createElement('a');
              clearBtn.className='clearBtn';
              clearBtn.textContent='Clear';
              clearBtn.setAttribute('href','#!');
              document.querySelector('body').insertBefore(clearBtn,document.querySelector('script'));
              document.querySelector('.clearBtn').addEventListener('click',UI.clearAllContainersOfColor);
            }
          }
        });
      },1500);
    }
  }
})();

const Intervals=(()=>{
  return {
    clearIntervalAndBtn:function(){
      for(let i=0;i<50;i++){
        clearInterval(i);
      }
      if(document.querySelector('span')){
        document.querySelector('span').nextElementSibling.remove();
        document.querySelector('span').remove();
      }
    },
    streamingAnimation:function(i,containers,color){
      return setInterval(()=>{
        i++;
        if(i>2){
          i=0;
          containers[0].className=`container ${color[i]}`;
          setTimeout(()=>{
            containers[1].className=`container ${color[i]}`;
          },500);
          setTimeout(()=>{
            containers[2].className=`container ${color[i]}`;
          },1000);
        } else {
          containers[0].className=`container ${color[i]}`;
          setTimeout(()=>{
            containers[1].className=`container ${color[i]}`;
          },500);
          setTimeout(()=>{
            containers[2].className=`container ${color[i]}`;
          },1000);
        }
      },2000)
    },
    repeatingAnimation:function(n,itemOfDataForRepeat,containers,dataForRepeat){
      return setInterval(()=>{
        n++;
        if(n===dataForRepeat.length){
          Intervals.clearIntervalAndBtn();
        } else {
          itemOfDataForRepeat = dataForRepeat[n].split('.');
          containers[itemOfDataForRepeat[0]].className=`container ${itemOfDataForRepeat[1]}`;
        }
      },2000)
    }
  }
})();

const possibility = (()=>{
  let i = -1; // for streamAnimation
  return {
    chengeColorOfContainerByClick:function(e){
      const clickedContainer = e.target.parentElement.parentElement.parentElement.parentElement;
      if(e.target.getAttribute('data-color')==='red'){
        clickedContainer.className='container backRed';
        const containers = document.querySelectorAll('.container');
        containers.forEach((container,index)=>{
          if(container===clickedContainer){
            forStorage.writeNewData(`${index}.backRed`);
          }
        });
        UI.createClearBtn();
      } else if(e.target.getAttribute('data-color')==='green'){
        clickedContainer.className='container backGreen';
        const containers = document.querySelectorAll('.container');
        containers.forEach((container,index)=>{
          if(container===clickedContainer){
            forStorage.writeNewData(`${index}.backGreen`);
          }
        });
        UI.createClearBtn();
      } else if(e.target.getAttribute('data-color')==='blue'){
        clickedContainer.className='container backBlue';
        const containers = document.querySelectorAll('.container');
        containers.forEach((container,index)=>{
          if(container===clickedContainer){
            forStorage.writeNewData(`${index}.backBlue`);
          }
        });
        UI.createClearBtn();
      }
    },
    streamAnimation:function(){
      Intervals.clearIntervalAndBtn();
      const color = ['backRed','backGreen','backBlue'];
      const containers = document.querySelectorAll('.container');
      i++;
      if(i>2){
        i=0;
        containers[0].className=`container ${color[i]}`;
        setTimeout(()=>{
          containers[1].className=`container ${color[i]}`;
        },500);
        setTimeout(()=>{
          containers[2].className=`container ${color[i]}`;
        },1000);
      } else {
        containers[0].className=`container ${color[i]}`;
        setTimeout(()=>{
          containers[1].className=`container ${color[i]}`;
        },500);
        setTimeout(()=>{
          containers[2].className=`container ${color[i]}`;
        },1000);
      }
      Intervals.streamingAnimation(i,containers,color);
      UI.createStopBtn('animate-all','stopAnimation');
      UI.createClearBtn();
    },
    repeatClicking:function(){
      Intervals.clearIntervalAndBtn();
      let currentData = forStorage.getData();
      if(currentData.length!==0){
        let n=-1;
        const dataForRepeat2=forStorage.getData();
        if(dataForRepeat2.length>10){
          const dataForRepeat=dataForRepeat2.slice(-10);
          const containers = document.querySelectorAll('.container');
          n++;
          let itemOfDataForRepeat = dataForRepeat[n].split('.');
          containers[itemOfDataForRepeat[0]].className=`container ${itemOfDataForRepeat[1]}`;
          Intervals.repeatingAnimation(n,itemOfDataForRepeat,containers,dataForRepeat);
          UI.createStopBtn('animate-previous','stopAllAnim');
          UI.createClearBtn();
        }else{
          const dataForRepeat=dataForRepeat2;
          const containers = document.querySelectorAll('.container');
          n++;
          let itemOfDataForRepeat = dataForRepeat[n].split('.');
          containers[itemOfDataForRepeat[0]].className=`container ${itemOfDataForRepeat[1]}`;
          Intervals.repeatingAnimation(n,itemOfDataForRepeat,containers,dataForRepeat);
          UI.createStopBtn('animate-previous','stopAllAnim');
          UI.createClearBtn();
        }
      }
    }
  }
})();

if(!forStorage.getData()){
  forStorage.beginUseStorage();  
}

// Change color in container by click
document.querySelector('.wrapper').addEventListener('click',possibility.chengeColorOfContainerByClick);

// Animation of every container
document.querySelector('.animate-all').addEventListener('click',possibility.streamAnimation);

// Repeat your last 10 actions
document.querySelector('.animate-previous').addEventListener('click',possibility.repeatClicking);
