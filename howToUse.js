Ext.application({
    launch:function(){
		Ext.Viewport.add({
			xtype:'panel',
			fullscreen:true,
			layout:'card',
			items:[{
				xtype:'toolbar',
				docked:'top',
				items:[{
					text:'Theme Builder',
					handler:function(){
						//show theme builder
						DEShowThemeBuilder(true);
					}
				},{
					text:'Hide Theme Builder',
					handler:function(){
						//hide theme builder
						DEShowThemeBuilder(false);
					}
				}]
			},{
				styleHtmlContent:true,
				html:'Theme builder demo'
			}],
			listeners:{
				painted:function(){
					setTimeout(function(){DEShowThemeBuilder(true); }, 1000);
				}       
			}
		});
	}
});