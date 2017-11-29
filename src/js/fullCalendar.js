var myValues=0;
var myValue=[];
var myValue2=[];


//On load:
var state = history.state || {};
var reloadCount = state.reloadCount || 0;
if (performance.navigation.type === 1) { // Reload
    state.reloadCount = ++reloadCount;
    history.replaceState(state, null, document.URL);
} else if (reloadCount) {
    delete state.reloadCount;
    reloadCount = 0;
    history.replaceState(state, null, document.URL);
}
if (reloadCount >= 1) {
    // Now, do whatever you want...
	localStorage.setItem("data",0);
  //  alert('The page was reloaded more than twice!');
}



document.addEventListener("keydown", KeyCheck);  //or however you are calling your method
function KeyCheck(event)
{
   var KeyID = event.keyCode;
   switch(KeyID)
   {
      case 8:
    	  var searchId=$('#searchId').val();
          
      if(searchId.length==1){
    	  location.reload();
      }
      break; 
      case 46:
      //alert("delete");
      break;
      default:
      break;
   }
}


function tConvert (time) {
	  // Check correct time format and split into components
	  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

	  if (time.length > 1) { // If time format correct
	    time = time.slice (1);  // Remove full string match value
	    time[5] = +time[0] < 12 ? 'a' : 'p'; // Set AM/PM
	    time[0] = +time[0] % 12 || 12; // Adjust hours
	  }
	  
	  
	 are= time.join ('').split(":");
	 
	 atrs=are[0]+are[2].substr(2)
	  return atrs; // return adjusted time or original string
	}


function myFunction() {
	//alert("myfunction-->");
	localStorage.setItem('filteredValue', "");
	localStorage.setItem('myValue2', JSON.stringify(myValue2));
	localStorage.setItem('myValue', JSON.stringify(myValue));
	
	
	var filtered = localStorage.getItem('my2');
	myValue2=filteredValue=JSON.parse(filtered)
	
	
	var filtere = localStorage.getItem('my');
	myValue=filteredValue=JSON.parse(filtere)
	
		localStorage.setItem("data",1);
		
	
	myValues=1
	var searchId=$('#searchId').val();
   
	var myValuenew=myValue.concat(myValue2);
	
	
	searchId=searchId.toLowerCase();

	var filteredValue = myValuenew.filter(function (item) {
		
	
		
		totalsearch="";
		if(item.start.split(" ")[1]){
			
			dates=tConvert(item.start.split(" ")[1]);		
			//alert(dates);
			totalsearch=dates+' '+item.title.toLowerCase();
			//alert();
			//alert(item.start.split(" ")[1].split(":")[0]+'p'+' '+item.title.toLowerCase());
		}
		
	      return ((item.title.toLowerCase().search(searchId))>-1 || ((totalsearch.search(searchId))>-1));
	});
	

	localStorage.setItem('filteredValue', JSON.stringify(filteredValue));
	
	
   
   
}



$(document).ready(function() {
  // page is now ready, initialize the calendar...
	////(localStorage.getItem("data"));
	if(localStorage.getItem("data")==0 || localStorage.getItem("data")==null){
		 localStorage.setItem("data",1);
		////("myValues "+myValues);
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
        
        success: function(data, textStatus, jqXHR) {
        	
          console.log(data);
          myValue=data;
         
          localStorage.setItem('my', JSON.stringify(myValue));
       
          localStorage.setItem("data",data);
      	

        }
      },
      {
    	  
        url: "http://localhost:5000/eventful",
        error: function() {
          $("#alert-eventful").fadeIn();
          // alert('there was an error while fetching events!');
        },
       
        success: function(data, textStatus, jqXHR) {
        	console.log("-----data---------------------------");
        	
        	myValue2=data;
        	localStorage.setItem('my2', JSON.stringify(myValue2));
        	
        	//console.log(data);
        	console.log(myValue2);
        	console.log("-----data---------------------------");
        	 delete data
        	
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
	}else {
		
		var filteredValue = localStorage.getItem('filteredValue');
		filteredValue=JSON.parse(filteredValue)
		console.log('retrievedObject: ', filteredValue);
		
		//alert(JSON.stringify(localStorage.getItem('filteredValue')));
		$('#calendar').fullCalendar({
			header: {
				 left: "prev",
			      center: "title today",
			      right: "next"
			    },
			editable: false,
			weekends: true, 
			events:filteredValue,
			eventAfterAllRender: function(view) {
			      $(".loader").hide(); // Add your script to show loading
			    },
			    views: {
			        agendaToDisplayFourWeek: {
			            type: 'timeline',
			            slotLabelFormat: 'ddd D', // Mon 3 etc
			            slotDuration: '24:00', // slots per day? 12:00 i.e. 12 hours AM/PM
			            duration: { weeks: 4 }
			        }
			    
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

			});
		
		
		$(".fc-row.fc-week.fc-widget-content table tr").each(function() {        
		    var cell = $.trim($(this).find('td').text());
		    if (cell.length == 0){
		      
		    }
		    
		    
		    
		    
		});
		
		
		$(".fc-widget-content").each(function() { 
			//alert("LL")
			if($(this).hasClass('fc-row fc-week fc-widget-content')){
				if($(this).hasClass('nodisplay')){
				
				}
			}
		});
		
		
		//$('div.section:empty').hide();
		$("tbody tr").each(function(){
		    if($(this).find('td:empty').length == 0){
		       
		    }
		});
	
		
	}
});
