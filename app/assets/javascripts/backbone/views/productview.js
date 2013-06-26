ProductView = Backbone.View.extend({

className: 'product col span_4',

events: 
{
"click #buy": "resetQuantity"
},

template:JST['backbone/templates/viewtemplate'],

render:function(){
var att = this.model.toJSON()
att.count = this.options.counter
var str =this.template(att)
this.$el.html(str)
},

resetQuantity:function(e)
{
//alert("button clicked");
if(this.model.attributes.quantity==0)
{
alert("OUT OF STOCK")
}
else
{
this.model.attributes.quantity-- 
}
 this.render()
},

initialize:function(){
this.render()
}
});