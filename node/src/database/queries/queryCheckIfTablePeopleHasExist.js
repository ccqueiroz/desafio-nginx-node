export const queryCheckIfTablePeoplesHasExist = "SELECT 1 FROM information_schema.tables WHERE table_schema = 'nodedb' AND table_name = 'peoples';";