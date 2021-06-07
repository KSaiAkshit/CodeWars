window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.padding = "7px 0px 7px 10px";

  } else {
    document.getElementById("nav").style.padding = "17px 0px 17px 10px";

  }
}

/*function selectElementByClass(className) {
  return document.querySelector(`.${className}`);
}
const sections = [
  selectElementByClass('homeS'),
  selectElementByClass('aboutS'),
  selectElementByClass('contactS'),
];

const nav = {
  homeS: selectElementByClass('homeBut'),
  aboutS: selectElementByClass('aboutBut'),
  collabS: selectElementByClass('contactBut'),
};

const options =
{
 threshold : 0.8,
}

const observer = new IntersectionObserver(function(entries,observer)
{

	entries.forEach(entry =>{
		if(!entry.isIntersecting)
			{return;}
		const nav2 = nav[entry.target.id];
		nav2.classList.add('active');
	});
    
},options);

sections.forEach((sec) => observer.observe(sec));


/*function selectElementByClass(className) {
  return document.querySelector(`.${className}`);
}



const sections = [
  selectElementByClass('homeS'),
  selectElementByClass('aboutS'),
  selectElementByClass('contactS'),
];

const nav = {
  homeS: selectElementByClass('homeBut'),
  aboutS: selectElementByClass('aboutBut'),
  collabS: selectElementByClass('contactBut'),
};

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.4,
};



function observerCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // get the nav item corresponding to the id of the section
      // that is currently in view
      const nav = nav[entry.target.id];
      // add 'active' class on the navItem
      nav.classList.add('active');
      // remove 'active' class from any navItem that is not
      // same as 'navItem' defined above
      Object.values(nav).forEach((item) => {
        if (item != nav) {
          item.classList.remove('active');
        }
      });
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((sec) => observer.observe(sec));
*/


function selectElementByClass(className) {
  return document.querySelector(`.${className}`);
}


const sections = [
  selectElementByClass('homeS'),
  selectElementByClass('aboutS'),
  selectElementByClass('contactS'),
];

const navItems = {
  homeS: selectElementByid('aa'),
  aboutS: selectElementByid('bb'),
  contactS: selectElementByid('cc'),
};

// intersection observer setup
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7,
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // get the nav item corresponding to the id of the section
      // that is currently in view
      const navItem = navItems[entry.target.id];
      // add 'active' class on the navItem
      navItem.classList.add("active");
      // remove 'active' class from any navItem that is not
      // same as 'navItem' defined above
      Object.values(navItems).forEach((item) => {
        if (item != navItem) {
          item.classList.remove("active");
        }
      });
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((sec) => observer.observe(sec));