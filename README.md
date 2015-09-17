Array Find
==========

A simple project to demonstrate that Array.prototype.find is not working in Meteor 1.2 release candidate 15 using the ecmascript package.

Here is what I did to get this running

````
$ meteor create array_find
$ cd array_find
$ rm array_find.css array_find.html
$ meteor remove autopublish
$ meteor remove insecure
$ meteor update --release METEOR@1.2-rc.15
$ meteor add ecmascript
````

Then when running it, you will see that Array.prototype does not exist, nor does the array find function.