function writemail(hostname,username,linktext,mode) {
  if (hostname.length > 0) {
	  mail_to="mail" + "to:" + username + "@" + hostname;
	  if (mode==0) {  
		  (linktext.length > 0)?document.write("<a href=" + mail_to + ">" + linktext + "</a>"):document.write("<a href=" +  mail_to + ">" + username + ""+"@" + hostname +"" + "</a>"); 
	  }
	  else { document.location.replace(mail_to); }
  }
}