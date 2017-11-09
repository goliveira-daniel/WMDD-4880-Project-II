$(document).ready(function() {
  // page is now ready, initialize the calendar...
  $("#calendar").fullCalendar({
    themeSystem: "bootstrap3",
    eventLimit: true,
    cache: true,
    header: {
      left: "prev",
      center: "title today",
      right: "next"
    },
    eventSources: [
      {
        cache: true,
        height: 'parent',
        url: "http://localhost:5000/ticketmaster",
        startParam: "startDateTime",
        endParam: "endDateTime",
        error: function() {
          $("#alert-eventful").fadeIn();
          // console.log();
        },
        // , statusCode: {
        // 200: function() {
        //     alert( "got data" );
        // }
        // }
        success: function(data, textStatus, jqXHR) {
          console.log(data);
        }
      },
      {
        url: "http://localhost:5000/eventful",
        error: function() {
          $("#alert-eventful").fadeIn();
          // alert('there was an error while fetching events!');
        },
        // , statusCode: {
        // 200: function() {
        //     alert( "got data" );
        // }
        // }
        success: function(data, textStatus, jqXHR) {
          console.log(data);
          // console.log(jqXHR)
        }
      }
    ],
    loading: function(bool) {
      $(".loader").show(); // Add your script to show loading
    },
    eventRender: function(event, element) {
      // element.qtip({
      //     content: event.description
      // })
      element.popover({
        html: true,
        trigger: "hover",
        title: event.title,
        placement: "auto",
        content: function() {
          return '<img src="' + event.imageUrl + '" />';
        }
        // content: event.imageUrl
      });
    },
    eventAfterAllRender: function(view) {
      $(".loader").hide(); // Add your script to show loading
    }
    // put your options and callbacks here
  });
});
