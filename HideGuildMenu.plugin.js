//META{"name":"HideGuilds"}*//
/*globals BdApi*/


class HideGuilds {
	
    getName() {return "Hide Guilds";}  
    getDescription() {return "Hides the servers until you hover over to the left side.";}
    getVersion() {return "0.0.3";}
    getAuthor() {return "Bonkeyzz";} 

	
	constructor() {
			this.org_width = $('.theme-dark .guildsWrapper-5TJh6A').css("width");
		if (this.org_width == null) { 
			this.org_width = $('.theme-light .guildsWrapper-5TJh6A').css("width");
		}
		console.log("%c[HideGuilds]%c Original Width: " + this.org_width, 'color: #00FFFF; font-weight: bold;', '');
	}
	
    load() {}

    start() {
		//TODO: Improve this part.
		var sHtmlDark = "@keyframes guilds_fadeout {";
		sHtmlDark += "from { width: " + this.org_width + "; }";
		sHtmlDark += "to { width: 0.5% }";
		sHtmlDark += "}";
		
		sHtmlDark += "@keyframes guilds_fadein {";
		sHtmlDark += "from { width: 0.5%; }";
		sHtmlDark += "to { width: " + this.org_width + " }";
		sHtmlDark += "}";
		
		sHtmlDark += ".theme-dark .guildsWrapper-5TJh6A{";
		sHtmlDark += "width: " + this.org_width + ";";
		sHtmlDark += "animation-name: guilds_fadein;";
		sHtmlDark += "animation-duration: 0.5s;";
		sHtmlDark += "}";
		
		sHtmlDark += ".theme-dark .guildsWrapper-5TJh6A:not(:hover){";
		sHtmlDark += "width: 0.5%;";
		sHtmlDark += "animation-name: guilds_fadeout;";
		sHtmlDark += "animation-duration: 0.5s;";
		sHtmlDark += "}";
		
		var sHtmlLight = "@keyframes guilds_fadeout {";
		sHtmlLight += "from { width: " + this.org_width + "; }";
		sHtmlLight += "to { width: 0.5% }";
		sHtmlLight += "}";
		
		sHtmlLight += "@keyframes guilds_fadein {";
		sHtmlLight += "from { width: 0.5%; }";
		sHtmlLight += "to { width: " + this.org_width + " }";
		sHtmlLight += "}";
		
		sHtmlLight += ".theme-light .guildsWrapper-5TJh6A{";
		sHtmlLight += "width: " + this.org_width + ";";
		sHtmlLight += "animation-name: guilds_fadein;";
		sHtmlLight += "animation-duration: 0.5s;";
		sHtmlLight += "}";
		
		sHtmlLight += ".theme-light .guildsWrapper-5TJh6A:not(:hover){";
		sHtmlLight += "width: 0.5%;";
		sHtmlLight += "animation-name: guilds_fadeout;";
		sHtmlLight += "animation-duration: 0.5s;";
		sHtmlLight += "}";
		
		BdApi.injectCSS('hideGuildsDark', sHtmlDark);
		BdApi.injectCSS('hideGuildsLight', sHtmlLight);
	} 
    stop() {
		BdApi.clearCSS('hideGuildsDark');
		BdApi.clearCSS('hideGuildsLight');
	}

    observer(changes) {}
}