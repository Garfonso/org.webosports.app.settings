enyo.kind({	
	name: "BackGesture",
	events: {
		onBack: ""
	},
	components: [
		{kind: "Signals", onkeyup: "handleKeyUp"}
	],
	handleKeyUp: function(inSender, inEvent) {
		if(inEvent.keyIdentifier == "U+1200001" || inEvent.keyIdentifier == "U+001B")
			this.doBack(inEvent);
	}
});