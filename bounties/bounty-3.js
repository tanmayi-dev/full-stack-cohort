// Create your own Promise class

/**

class CustomPromise {
  resolveHandler;
  rejectHandler;
  isCompleted = false;

  constructor(executor) {
    this.then = (onResolve) => {
      this.resolveHandler = onResolve;
      return this;
    };

    this.catch = (onReject) => {
      this.rejectHandler = onReject;
      return this;
    };

    const resolve = (value) => {
      this.executeHandler(this.resolveHandler, value);
    };

    const reject = (reason) => {
      this.executeHandler(this.rejectHandler, reason);
    };

    executor(resolve, reject);
  }

  executeHandler(handler, value) {
    if (this.isFunction(handler) && !this.isCompleted) {
      handler(value);
      this.isCompleted = true;
    }
  }

  isFunction(checkFunction) {
    return (
      checkFunction && {}.toString.call(checkFunction) === "[object Function]"
    );
  }
}

// Evaluate CustomPromise
const sample = new CustomPromise((resolve, reject) => {
  setTimeout(() => resolve(1), 5000);
});

sample.then((val) => console.log(`Resolved value: ${val}`));
 */
