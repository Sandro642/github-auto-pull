const { AutoPull } = require('./util')

new AutoPull("Skym-Mc", "SkymClient", "Desktop", 5).withBranch("skymclientv2").withExec("npm i").oauth("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").start()