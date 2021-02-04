export default function(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        try {
            return originalMethod.apply(this, args);
        } catch(e) {
            console.log(e);
            toast({message: "Transaction failed", icon: "mdi-exclamation-thick", iconColor: "red"});
            return [];
        }
    }
}