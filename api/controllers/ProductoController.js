/**
 * ProductoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    new:function (req, res){
        console.log('entre al formulario');
        res.view('produc/singin');
    },
    create:function(req, res){
        var producobj={
            nombre : req.param('nombre'),
            marca : req.param('marca'),
            descripcion : req.param('descripcion'),
            cantidad : req.param('cantidad')
        }
        Producto.create(producobj,function (err,produc){
            if(err){
                console.log(err);
                res.redirect('/produc/singin');
            }
            
            res.redirect('/produc/singin');
        })
    }
    
  

};

