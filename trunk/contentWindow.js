
//window.addEventListener("load",set,false);
window.addEventListener("load", openContainerListener, false);

function set() {
/*	document.getElementById("contentWindow").open(location.href); */
/*	document.getElementById("contentWindow").open("granola"); */
	document.getElementById("iesh").setAttribute("label", "granola");
}

function openContainerListener() {

/*	esto podría funcionar el día en que el panel donde se muestran los archivos 
	sea un control autónomo que sabe acomodar su contenido. mientras tanto este
	trabajo se hará a mano y ya veremos cómo se reusa.
*/

//	document.getElementById("contentWindow").openContainer(location.href);

//	document.getElementById("iesh").setAttribute("label", location.href);
	document.getElementById("iesh").setAttribute("label", "files:///c:/");

	// al parecer hay que tener mucho cuidado con las direcciones que contienen 
	// '/./' o '/../'. para eso conviene normalizar de alguna manera las direcciones
	// o más bien tratar de que haya algún otro recurso del sistema que se encargue.
	// dejarlo en nuestras manos parece muy propenso a errores.

	// location.href = "C:\\"; 	// xseguridad no funciona pero la idea es buena...
	// document.title="C:\\";	// esto tampoco funciona pero porque no sé cómo hacerlo.

	const XUL_NS="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";

	//href="files:///c:/";

	//fileuri=href;
	//fileuri="file" + fileuri.substring("files".length);

	document.getElementById("iesh").setAttribute("label", "jajaja");	// debug!
	c = Components;
	document.getElementById("iesh").setAttribute("label", "jejeje");	// debug!
	d = c.classes['@mozilla.org/network/io-service;1'];
	document.getElementById("iesh").setAttribute("label", "jijiji");	// debug!


	//File = Components.classes['@mozilla.org/network/io-service;1'].getService(Components.interfaces.nsIIOService).getProtocolHandler('file').QueryInterface(Components.interfaces.nsIFileProtocolHandler).getFileFromURLSpec("files:///c:/");

	document.getElementById("iesh").setAttribute("label", "hola");	// debug!

/*
	if(File.isDirectory()) {
		try {
			files = File.directoryEntries;
			filelist = new Array();
			while (files.hasMoreElements()) {
				filelist.push(files.getNext().QueryInterface(Components.interfaces.nsILocalFile));
			}


			i=0;
			while (filelist.length > i) {
				fileitem = document.createElementNS(XUL_NS, "fileItem");
				name = filelist[i].path.split("\\");
				name = name[name.length-1];
				uri = Components.classes['@mozilla.org/network/io-service;1']
					.getService(Components.interfaces.nsIIOService)
					.newFileURI(filelist[i]).spec;
				fileitem.setAttribute("label", name);


				document.getElementById("iesh").setAttribute("label", name);	// debug!
				
				this.appendChild(fileitem);
				i++;
			}
		}
		catch(e) {
			alert("No era una carpeta, al parecer");
			return;
		}




	// en 'file_binding.xml' buscar "if(File.isDirectory())" para seguir...

*/

}