/* Узагальнені типи (Generics) - це один із потужних інструментів TypeScript, що допомагають створювати код, який можна використовувати повторно, зберігаючи водночас строгу типізацію. Дозволяють визначити "узагальнений" тип, який потім може бути спеціалізований для роботи з різними іншими типами. Замість того, щоб визначати окремі функції для кожного можливого типу даних, ви можете визначити одну функцію, яка працює з "будь-яким" типом даних.*/
function head(value) {
    return value[0];
}
head('certain');
const obj1 = {
    title: 'Model',
    value: 12
};
// obj1.value = true // ERROR
obj1.value = 5; // OK
export const obj2 = {
    title: 'Model',
    value: [12, 4]
};
// obj1.value = true // ERROR
// obj2.value = 5 // ERROR
obj2.value.push(1); // OK
// ----------------------------------------------------------------
let arr = [];
// arr = ['str', 10, true]; // Error
arr = ['str', 10]; // OK
//# sourceMappingURL=01-why-generic.js.map