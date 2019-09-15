interface PoulpeOption {
    element: HTMLElement | string,
    data: Object
}


class Poulpe {
  private regex: RegExp = /(?:{{([^}]+)}})/g;
  private element: any;
  private data: any;
  private events:any = {};
  constructor(option: PoulpeOption) {
    this.element = option.element;
    this.data = option.data;

  }

  public run() :void {
    let matches = this.find();
    this.bind(matches);
    this.emit("end", this.element)
  }

  private find(): any {
    let text = this.getText();
    if (this.regex.test(text)) {
      let newmatch:any = text.match(this.regex)!.map((x: String )=> {
        let un = x
          .replace("{{", "")
          .replace("}}", "").trim();
        let d = this.getData(un);
        let obj = { data: d, object: x };
        this.emit("search", obj);

        return d === null ? null : obj;
      });

      this.emit("find", newmatch.filter((x:any) => x !== null));
      return newmatch;
    }
  }

  private getData(name:string) :string  {
    return typeof this.data[name] === "undefined" ? null : this.data[name];
  }

  private bind(matches:[]) {
    if (matches instanceof Array) {
      matches.forEach(x => {
        if (x === null) return;
        if(typeof this.element === "object"){
            this.element["innerText"] = this.element["innerText"].replace(x["object"], x["data"]);
        } else {
            this.element = this.element.replace(x["object"], x["data"]);
        }

        this.emit("bind", x);
      });

    } else
      throw new Error(
        "[Poulpe] Can't render, see if your text/document is good"
      );
  }

  private getText() : string {
    return typeof this.element === "object"
      ? this.element["innerText"]
      : this.element;
  }

  	public on(event:any, listener:any) {
		if (this.events[event] === undefined) {
			this.events[event] = [];
		}

		this.events[event].push(listener);
        var l = this;
		return function() {
			l.off(event, listener);
		};
	}

	public off(event?:any, listener?:any) {
		if (event === undefined && listener === undefined) {
			this.events = {};
		} else if (listener === undefined) {
			delete this.events[event];
		} else if (this.events[event].indexOf(listener) !== -1) {
			this.events[event].splice(this.events[event].indexOf(listener), 1);
		}
	}

	public emit(event:any, ...args:any) {
		if (this.events[event] !== undefined) {
			for (const listener of this.events[event]) {
				listener(...args);
			}
		}

		if (event !== "*") {
			this.emit("*", ...args);
		}
	}

	public once(event:any, listener:any) {
		return this.on(event, () => {
			this.emit(event);

			this.off(event, listener);
		});
	}
}

if(typeof window === "object"){
    (window as any)["Poulpe"] = Poulpe;
} else {
    module.exports =  Poulpe
}
