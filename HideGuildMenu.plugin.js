// //META{"name":"HideGuilds"}*//
// /*globals BdApi*/


class HideGuilds {

	getName() { return "Hide Guilds"; }
	getDescription() { return "Hides the servers until you hover over to the left side."; }
	getVersion() { return "0.0.5"; }
	getAuthor() { return "Bonkeyzz"; }


	constructor() {
		this.guildBarClass = ".wrapper-3NnKdC";
		this.scrollerBase = document.querySelector(this.guildBarClass)
		this.initialWidth = this.scrollerBase.width() + "px";

		this.targetWidth = "0.5%";
		this.animationDuration = "0.5s";
		this.guildBarAnimationCss = "";

		this.initialized = false;
		
		console.log("%c[HideGuilds]%c Original Width: " + this.initialWidth, 'color: #00FFFF; font-weight: bold;', '');
	}

    load() { 
		this.guildBarAnimationCss = 
		`
		@keyframes guilds_slideout {
			from { width: ${this.initialWidth}; }
			to { width: ${this.targetWidth}; }
		}

		@keyframes guilds_slidein {
			from { width: ${this.targetWidth}; }
			to { width: ${this.initialWidth}; }
		}

		${this.guildBarClass} {
			width: ${this.initialWidth}px;
			animation-name: guilds_slidein;
			animation-duration: ${this.animationDuration};
		}

		${this.guildBarClass}:not(:hover) {
			width: ${this.targetWidth};
			animation-name: guilds_slideout;
			animation-duration: ${this.animationDuration};
		}
		`; 

	}
    
	start() {
		BdApi.injectCSS('guildBarAnimation', this.guildBarAnimationCss);
		this.initialized = true;
		console.log("%c[HideGuilds]%c Started!", 'color: #00FFFF; font-weight: bold;', '');
	}
	stop() {
		BdApi.clearCSS('guildBarAnimation');
		this.initialized = false;
		console.log("%c[HideGuilds]%c Stopped!", 'color: #00FFFF; font-weight: bold;', '');
	}
}