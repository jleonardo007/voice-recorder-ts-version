import { SetRecordings } from "types/recorder";

export function deleteAudio(audioKey: string, setRecordings: SetRecordings) {
  setRecordings((prevState) => prevState.filter((record) => record.key !== audioKey));
}
