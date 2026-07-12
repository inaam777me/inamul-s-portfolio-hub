import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, CheckCircle2, XCircle, ChevronDown, ChevronUp, Trash2 } from "lucide-react";

type LogEntry = {
  id: number;
  type: "error" | "warn";
  message: string;
  source?: string;
  time: string;
};

const PreviewStatusPanel = () => {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<LogEntry[]>([]);
  const [buildTime, setBuildTime] = useState<string>("—");
  const [loadMs, setLoadMs] = useState<number | null>(null);

  // Only show in dev
  if (!import.meta.env.DEV) return null;

  useEffect(() => {
    setBuildTime(new Date().toLocaleTimeString());

    // Measure load time
    if (performance && performance.timing) {
      const t = performance.timing;
      const ms = t.domContentLoadedEventEnd - t.navigationStart;
      if (ms > 0) setLoadMs(ms);
    }

    let counter = 0;

    const pushEntry = (type: "error" | "warn", message: string, source?: string) => {
      counter += 1;
      setErrors((prev) => [
        ...prev.slice(-49),
        {
          id: counter,
          type,
          message,
          source,
          time: new Date().toLocaleTimeString(),
        },
      ]);
    };

    const onError = (e: ErrorEvent) => {
      pushEntry("error", e.message || "Unknown error", e.filename);
    };
    const onRejection = (e: PromiseRejectionEvent) => {
      const msg =
        typeof e.reason === "string"
          ? e.reason
          : e.reason?.message ?? JSON.stringify(e.reason);
      pushEntry("error", `Unhandled: ${msg}`);
    };

    // Patch console.error / warn to capture logs
    const origError = console.error;
    const origWarn = console.warn;
    console.error = (...args: unknown[]) => {
      pushEntry("error", args.map((a) => (typeof a === "string" ? a : String(a))).join(" "));
      origError.apply(console, args as []);
    };
    console.warn = (...args: unknown[]) => {
      pushEntry("warn", args.map((a) => (typeof a === "string" ? a : String(a))).join(" "));
      origWarn.apply(console, args as []);
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);

    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
      console.error = origError;
      console.warn = origWarn;
    };
  }, []);

  const hasErrors = errors.some((e) => e.type === "error");
  const status = hasErrors ? "failed" : "200";

  return (
    <div className="fixed bottom-4 right-4 z-[100] font-body">
      <motion.div
        layout
        className="glass rounded-xl shadow-card border border-border overflow-hidden"
        style={{ width: open ? 360 : "auto" }}
      >
        {/* Header */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-secondary/50 transition-colors"
        >
          <Activity size={16} className="text-primary shrink-0" />
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {hasErrors ? (
              <XCircle size={14} className="text-destructive shrink-0" />
            ) : (
              <CheckCircle2 size={14} className="text-primary shrink-0" />
            )}
            <span className={`text-xs font-mono font-semibold ${hasErrors ? "text-destructive" : "text-primary"}`}>
              {status}
            </span>
            <span className="text-xs text-muted-foreground truncate">
              · {buildTime}
              {loadMs !== null && ` · ${loadMs}ms`}
            </span>
            {errors.length > 0 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-destructive/20 text-destructive font-semibold">
                {errors.length}
              </span>
            )}
          </div>
          {open ? (
            <ChevronDown size={14} className="text-muted-foreground shrink-0" />
          ) : (
            <ChevronUp size={14} className="text-muted-foreground shrink-0" />
          )}
        </button>

        {/* Expanded body */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-border"
            >
              <div className="px-3 py-2 grid grid-cols-3 gap-2 text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border">
                <div>
                  <div>Status</div>
                  <div className={`mt-0.5 text-sm font-mono font-semibold ${hasErrors ? "text-destructive" : "text-primary"}`}>
                    {status}
                  </div>
                </div>
                <div>
                  <div>Build</div>
                  <div className="mt-0.5 text-sm font-mono text-foreground">{buildTime}</div>
                </div>
                <div>
                  <div>Load</div>
                  <div className="mt-0.5 text-sm font-mono text-foreground">
                    {loadMs !== null ? `${loadMs}ms` : "—"}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-3 py-1.5 border-b border-border">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Console ({errors.length})
                </span>
                {errors.length > 0 && (
                  <button
                    onClick={() => setErrors([])}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Clear"
                  >
                    <Trash2 size={12} />
                  </button>
                )}
              </div>

              <div className="max-h-56 overflow-y-auto">
                {errors.length === 0 ? (
                  <div className="px-3 py-4 text-xs text-muted-foreground text-center">
                    No errors or warnings 🎉
                  </div>
                ) : (
                  <ul className="divide-y divide-border">
                    {errors.slice().reverse().map((entry) => (
                      <li key={entry.id} className="px-3 py-2 text-xs">
                        <div className="flex items-start gap-2">
                          <span
                            className={`mt-0.5 shrink-0 px-1.5 py-0.5 rounded font-mono text-[9px] uppercase font-semibold ${
                              entry.type === "error"
                                ? "bg-destructive/20 text-destructive"
                                : "bg-primary/20 text-primary"
                            }`}
                          >
                            {entry.type}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="text-foreground break-words">{entry.message}</div>
                            <div className="text-[10px] text-muted-foreground mt-0.5 font-mono">
                              {entry.time}
                              {entry.source && ` · ${entry.source.split("/").pop()}`}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PreviewStatusPanel;
