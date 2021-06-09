window.onscroll = function () { scrollFunction() };
// Pass directly ^
// window.onscroll = scrollFunction;

function scrollFunction () {
  if ( document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
    document.getElementById( "nav" ).style.padding = "7px 0px 7px 10px";

  } else {
    document.getElementById( "nav" ).style.padding = "17px 0px 17px 10px";

  }
}
// SUGGESTION FOR ^, refer to 'Ternery Operator'
// function scrollFunction () {
//   document.getElementById( "nav" ).style.padding =
//     ( document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) ?
//       "7px 0px 7px 10px" :
//       "17px 0px 17px 10px";
// }

// Look up 'window.onload', event listeners remain even after they are not needed
document.addEventListener( "DOMContentLoaded", function () {
  const sections =
    [ document.querySelector( ".homeS" ),
    document.querySelector( ".aboutS" ),
    document.querySelector( ".contactS" ) ];


  const navB =
  {
    homeS: document.querySelector( "#aa" ),
    aboutS: document.querySelector( "#bb" ),
    contactS: document.querySelector( "#cc" )
  };

  const options = {
    root: null,
    threshold: 0.6,
  };

  const observer = new IntersectionObserver( function ( entries, observer ) {
    entries.forEach( entry => {
      if ( entry.isIntersecting ) {
        const nav = navB[ entry.target.id ];
        // add 'active' class on the navItem
        nav.classList.add( "active" );
      }
    } );


  }, options );

  sections.forEach( section => {
    observer.observe( section );
  } );




} );

const sections =
  [ document.querySelector( ".homeS" ),
  document.querySelector( ".aboutS" ),
  document.querySelector( ".contactS" ) ];


const navB =
{
  homeS: document.querySelector( "#aa" ),
  aboutS: document.querySelector( "#bb" ),
  contactS: document.querySelector( "#cc" )
};

const options = {
  root: null,
  threshold: 0.5,
};

const observer = new IntersectionObserver( function ( entries, observer ) {
  entries.forEach( entry => {
    if ( entry.isIntersecting ) {
      const nav = navB[ entry.target.id ];
      // add 'active' class on the navItem
      nav.classList.add( "active" );


    }

    Object.values( navB ).forEach( ( item ) => {
      if ( item != navB ) {
        item.classList.remove( 'active' );
      }
    } );

  } );


}, options );

sections.forEach( section => {
  observer.observe( section );
} );
