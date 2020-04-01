#!/usr/bin/env node
## para q solo un usuario pueda ejecutar node 
console.log('           user id: ', process.getuid());
console.log('          group id: ', process.getgid());
console.log(' user effective id: ', process.getegid());
console.log('group effective id: ', process.getegid());
console.log('\n switching user and group...\n');
process.setgid(1000);
process.setegid(1000);
process.setuid(1000);
process.seteuid(1000);
console.log('           user id: ', process.getuid());
console.log('          group id: ', process.getgid());
console.log(' user effective id: ', process.getegid());
console.log('group effective id: ', process.getegid());
console.log('\n output: \n');