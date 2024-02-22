const { AutoPull } = require('./util')

new AutoPull("Skym-Mc", "SkymClient", "Desktop", 5).withBranch("skymclientv2").withExec("npm i").oauth("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").start()