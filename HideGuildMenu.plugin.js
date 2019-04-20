//META{"name":"HideGuilds"}*//
/*globals BdApi*/


class HideGuilds {

	getName() { return "Hide Guilds"; }
	getDescription() { return "Hides the servers until you hover over to the left side."; }
	getVersion() { return "0.0.4"; }
	getAuthor() { return "Bonkeyzz"; }

	getTargetClass() { return ".wrapper-1Rf91z"; }

	constructor() {
		this.targetCSS = $(this.getTargetClass());
		this.org_width = this.targetCSS.css("width");

		console.log("%c[HideGuilds]%c Original Width: " + this.org_width, 'color: #00FFFF; font-weight: bold;', '');
	}


	load() { }

	setAnimationEffect(targetCSS, originalWidth, targetWidth, duration) {
		var rawHtml = "@keyframes guilds_slideout {";
		rawHtml += "from { width: " + originalWidth + "; }";
		rawHtml += "to { width: " + targetWidth + "}";
		rawHtml += "}";

		rawHtml += "@keyframes guilds_slidein {";
		rawHtml += "from { width: " + targetWidth + "}";
		rawHtml += "to { width: " + originalWidth + " }";
		rawHtml += "}";

		rawHtml += targetCSS + "{";
		rawHtml += "width: " + originalWidth + ";";
		rawHtml += "animation-name: guilds_slidein;";
		rawHtml += "animation-duration: " + duration + ";";
		rawHtml += "}";

		rawHtml += targetCSS + ":not(:hover){";
		rawHtml += "width: " + targetWidth + ";";
		rawHtml += "animation-name: guilds_slideout;";
		rawHtml += "animation-duration: " + duration + ";";
		rawHtml += "}";

		BdApi.injectCSS('anim-sidebar', rawHtml);
		
	}
	start() {

		this.setAnimationEffect(this.getTargetClass(), this.org_width, "0.5%", "0.5s");
	}
	stop() {
		BdApi.clearCSS('anim-sidebar');
	}

	observer(changes) { }
}