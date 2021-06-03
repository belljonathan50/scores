


INSCORELIBDIR 	:= node_modules/@grame/inscorejs
DST				:= ../docs/fantaisie

html:
	[ -d $(DST)/libs ] || mkdir -p $(DST)/libs
	cp -r $(INSCORELIBDIR)/fonts $(DST)/libs
	cp $(INSCORELIBDIR)/libINScore.* $(DST)/libs
	cp $(INSCORELIBDIR)/INScoreJS.js $(DST)/libs
	cp -r imgs $(DST)
	sed -e 's/node_modules\/@grame\/inscorejs/libs/' index.html > $(DST)/index.html	
	