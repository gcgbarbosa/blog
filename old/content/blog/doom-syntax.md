+++
title = "How to enable syntax highlighting and auto-completion for NS-3 in Doom Emacs?"
date = "2022-01-01"
description = "Article showing how to enable autocompletion if you're using NS-3"
tags = [
    "networks",
]
+++

If doom is your favorite editor and you want to work on ns-3 with doom then follow these steps:

* Have doom emacs and ns-3 installed.
    
* Make sure your `init.el` file has cc with lsp enabled:
    

```plaintext
(cc +lsp)
```

* You will need to generate a file called `compile_commands.json`.
    
* Depending on your version of ns-3 you might use waf or cmake for that.
    
* on cmake, add the following to your cmake compilation command:
    

```plaintext
cmake -DCMAKE_EXPORT_COMPILE_COMMANDS=ON ...
```

* on waf, the document is automatically generated inside the `build` folder.
    
* Move the `compile_commands.json` file to the root of your `ns3` folder.
    
* Enjoy your autocompletion:
    

![2022-08-14-18:33:27.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660527250695/Tcd-TeaFQ.png)

* You can use `g d` to jump to the definition of an identifier.
