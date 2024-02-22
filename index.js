const { AutoPull } = require('./util')

new AutoPull("Skym-Mc", "SkymClient", "Desktop", 5).withBranch("skymclientv2").withExec("npm i").oauth("").start()
